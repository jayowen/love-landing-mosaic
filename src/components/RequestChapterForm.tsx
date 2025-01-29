import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface RequestChapterFormProps {
  className?: string;
}

export const RequestChapterForm = ({ className }: RequestChapterFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const portalId = "45592170";
    const formId = "1b36054b-938b-4d83-9046-95ba2cea2f38";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields: [
            {
              name: 'email',
              value: formData.email
            },
            {
              name: 'firstname',
              value: formData.firstname
            },
            {
              name: 'lastname',
              value: formData.lastname
            }
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title
          }
        })
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your free chapter is on its way to your inbox.",
        });
        setFormData({ email: "", firstname: "", lastname: "" });
        // Redirect to the specified URL after successful submission
        window.location.href = "https://hubs.ly/Q034C0R-0";
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={className}>
          Get Free Chapter
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center">Get Your Free Chapter</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <Input
              type="text"
              placeholder="First Name"
              value={formData.firstname}
              onChange={(e) => setFormData(prev => ({ ...prev, firstname: e.target.value }))}
              required
              className="border-book-red focus-visible:ring-book-red"
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={(e) => setFormData(prev => ({ ...prev, lastname: e.target.value }))}
              required
              className="border-book-red focus-visible:ring-book-red"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="border-book-red focus-visible:ring-book-red"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-book-red hover:bg-book-gold text-white font-semibold py-6 rounded-full transition-all duration-300"
          >
            {isSubmitting ? "Sending..." : "Get Free Chapter"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};