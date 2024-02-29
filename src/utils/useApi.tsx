import { useState, useCallback } from "react";

interface EmailRequest {
  userEmail: string;
  userName: string;
  userPhone?: string;
  userBusiness?: string;
  userMessage: string;
}
interface EmailResponse {
  status: string;
  message: string;
}
interface EmailSenderHook {
  loading: boolean;
  error: string | null;
  sendEmail: (emailData: EmailRequest) => Promise<EmailResponse | void>;
}

const useApi = (): EmailSenderHook => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = useCallback(
    async (emailData: EmailRequest): Promise<EmailResponse | void> => {
      try {
        setLoading(true);

        // Realizar la petición a la API de emailsender
        const response = await fetch(
          "https://emailsender.up.railway.app/api/emailsender/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(emailData),
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData: EmailResponse = await response.json();
        setLoading(false);
        return responseData;
      } catch (error) {
        setLoading(false);
        setError(error as string | null);
      }
    },
    [],
  );

  return {
    loading,
    error,
    sendEmail,
  };
};

export default useApi;
