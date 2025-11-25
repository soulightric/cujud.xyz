"use client";

import { useState, useEffect, useOptimistic, useRef } from "react";
import { submitGuestbook } from "@/app/actions";
import { motion } from "framer-motion";

type Message = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Load messages pertama kali
  useEffect(() => {
    fetch("/api/guestbook")
      .then(r => r.json())
      .then(data => {
        setMessages(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  async function handleSubmit(formData: FormData) {
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // Optimistic message dengan status "sending"
    addOptimisticMessage([
      ...messages,
      {
        id: "temp-" + Date.now(),
        name,
        message,
        created_at: new Date().toISOString(),
      },
    ]);

    formRef.current?.reset();

    const result = await submitGuestbook(formData);

    if (result.success) {
      setMessages(prev => [...prev, result.data]);
    }

    setIsSubmitting(false);
  }

  // Skeleton card
  const SkeletonCard = () => (
    <div className="bg-black/50 border border-emerald-800/30 rounded-xl p-5 animate-pulse">
      <div className="flex justify-between items-start mb-3">
        <div className="h-5 bg-emerald-800/40 rounded w-32"></div>
        <div className="h-4 bg-emerald-900/30 rounded w-24"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-800/50 rounded w-full"></div>
        <div className="h-4 bg-gray-800/40 rounded w-4/5"></div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Form */}
      <form
        ref={formRef}
        action={handleSubmit}
        className="bg-black/60 border-2 border-emerald-600 rounded-xl p-6 backdrop-blur relative"
      >
        {isSubmitting && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-emerald-400 font-medium">Mengirim jejak...</span>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input
            name="name"
            placeholder="Nama kamu (atau nickname)"
            required
            maxLength={32}
            disabled={isSubmitting}
            className="px-4 py-3 bg-black/40 border border-emerald-600 rounded-lg text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400 disabled:opacity-60"
          />
          <input
            name="message"
            placeholder="Pesan buat Fikly $ujud..."
            required
            maxLength={200}
            disabled={isSubmitting}
            className="px-4 py-3 bg-black/40 border border-emerald-600 rounded-lg text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400 disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold rounded-lg hover:from-emerald-500 hover:to-emerald-400 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "SEDANG MENGIRIM..." : "TINGGALKAN JEJAK"}
        </button>
      </form>

      {/* Messages List */}
      <div className="space-y-4">
        {isLoading ? (
          // Loading skeleton
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : optimisticMessages.length === 0 ? (
          <p className="text-center text-emerald-600 py-16 text-lg">
            Belum ada yang ninggalin jejak... jadilah yang pertama!
          </p>
        ) : (
          [...optimisticMessages]
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative"
              >
                {/* Tanda "sending" untuk pesan temporary */}
                {String(msg.id || "").startsWith("temp-") && (
                  <div className="absolute -left-8 top-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-emerald-600">sending...</span>
                  </div>
                )}

                <div className="bg-black/50 border border-emerald-800/50 rounded-xl p-5 backdrop-blur hover:border-emerald-600/70 transition">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-emerald-400">{msg.name}</span>
                    <span className="text-xs text-emerald-600">
                      {new Date(msg.created_at).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className="text-white break-words">{msg.message}</p>
                </div>
              </motion.div>
            ))
        )}
      </div>
    </div>
  );
}