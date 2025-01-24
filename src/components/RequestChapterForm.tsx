import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export const RequestChapterForm = () => {
  useEffect(() => {
    // Load HubSpot form when dialog opens
    const loadForm = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "na1",
          portalId: "45592170",
          formId: "1b36054b-938b-4d83-9046-95ba2cea2f38",
          target: "#hubspot-chapter-form",
          css: `
            .hs-form {
              font-family: 'Inter', sans-serif;
            }
            .hs-form-field {
              margin-bottom: 1rem;
            }
            .hs-form-field label {
              font-family: 'Inter', sans-serif;
              color: #374151;
              font-size: 0.875rem;
              font-weight: 500;
              margin-bottom: 0.5rem;
              display: block;
            }
            .hs-input {
              width: 100%;
              padding: 0.5rem 1rem;
              border: 1px solid #E5E7EB;
              border-radius: 0.375rem;
              font-size: 0.875rem;
              transition: border-color 0.15s ease-in-out;
            }
            .hs-input:focus {
              outline: none;
              border-color: #B91C1C;
              box-shadow: 0 0 0 2px rgba(185, 28, 28, 0.1);
            }
            .hs-button {
              background-color: #B91C1C;
              color: white;
              padding: 0.75rem 1.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1rem;
              border: none;
              cursor: pointer;
              transition: all 0.3s ease;
              width: 100%;
              margin-top: 1rem;
            }
            .hs-button:hover {
              background-color: #991B1B;
              transform: translateY(-1px);
            }
            .hs-error-msg {
              color: #B91C1C;
              font-size: 0.75rem;
              margin-top: 0.25rem;
            }
            .submitted-message {
              color: #374151;
              font-size: 0.875rem;
              text-align: center;
              padding: 1rem;
            }
          `
        });
      }
    };

    loadForm();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-white text-book-red hover:bg-gray-50 border-book-red font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get Free Chapter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Get Your Free Chapter</DialogTitle>
        </DialogHeader>
        <div id="hubspot-chapter-form" className="mt-4">
          {/* HubSpot form will be loaded here */}
        </div>
      </DialogContent>
    </Dialog>
  );
};