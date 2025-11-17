"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Mau ngobrol, kolab, atau sekadar ngopi virtual? Drop pesan aja!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-background/60 backdrop-blur border-primary/10">
            <form action="https://formspree.io/f/xblrjwpq" method="POST" className="space-y-6">
              <Input name="name" placeholder="Nama kamu" required />
              <Input name="email" type="email" placeholder="Email kamu" required />
              <Textarea name="message" rows={6} placeholder="Pesan kamu..." required />
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Atau langsung email aja:</p>
              <a href="mailto:fikrizeronine@gmail.com" className="text-2xl font-semibold text-primary hover:underline flex items-center justify-center gap-2">
                <Mail className="w-6 h-6" />
                fikrizeronine@gmail.com
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}