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
          target: "#hubspot-chapter-form"
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