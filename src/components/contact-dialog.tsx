import { useState } from "react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

export const ContactDialog = () => {

    const [form, setForm] = useState({ name: "", message: "" });

    const handleSubmit = (type: "email" | "whatsapp") => {
        if (type == "email") {
            const mailto = `mailto:me@nurbxfit.com?subject=Contact from ${form.name}&body=${form.message}`
            window.location.href = mailto
        } else {
            const whatsapp = `https://wa.me/60123456789?text=Hi, I'm ${form.name}. ${form.message}`
            window.open(whatsapp, "_blank")
        }

    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} className="text-sm bg-transparent">
                    Contact Us
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        Contact Us
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>Name</Label>
                        <Input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                        <Label>Message</Label>
                        <Textarea
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="write your message..." />
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button onClick={() => handleSubmit("email")}>Send Email</Button>
                        <Button
                            onClick={() => handleSubmit("whatsapp")}
                            style={{ backgroundColor: "#25D366", color: "#fff" }}
                            className="hover:bg-[#128C7E]"
                        >
                            WhatsApp
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}