// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { api, type SubscriberInput } from "@shared/routes";
// import { useToast } from "@/hooks/use-toast";

// export function useCreateSubscriber() {
//   const queryClient = useQueryClient();
//   const { toast } = useToast();

//   return useMutation({
//     mutationFn: async (data: SubscriberInput) => {
//       // Validate with Zod before sending
//       const validated = api.subscribers.create.input.parse(data);

//       const res = await fetch(api.subscribers.create.path, {
//         method: api.subscribers.create.method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(validated),
//       });

//       if (!res.ok) {
//         if (res.status === 400) {
//           const error = api.subscribers.create.responses[400].parse(await res.json());
//           throw new Error(error.message);
//         }
//         throw new Error("Failed to subscribe");
//       }

//       return api.subscribers.create.responses[201].parse(await res.json());
//     },
//     onSuccess: () => {
//       toast({
//         title: "Success",
//         description: "You've been added to the waitlist!",
//       });
//     },
//     onError: (error: Error) => {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: error.message,
//       });
//     },
//   });
// }
