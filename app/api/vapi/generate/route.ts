import { generateText } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Prepara preguntas para una entrevista de trabajo... 
            El puesto es ${role}.
            El nivel de experiencia es ${level}.
            La pila tecnológica utilizada en el puesto es: ${techstack}.
            El enfoque entre las preguntas de comportamiento y las técnicas debe ser: ${type}.
            La cantidad de preguntas requeridas es: ${amount}.
            Por favor, devuelva solo las preguntas, sin texto adicional.
            Las preguntas serán leídas por un asistente de voz, así que no utilice "/", "*" ni ningún otro carácter especial que pueda interrumpir el funcionamiento del asistente de voz.
            Devuelva las preguntas con este formato:
            ["Pregunta 1", "Pregunta 2", "Pregunta 3"]
            `,
    });

    const interview = {
      role: role,
      type: type,
      level: level,
      techstack: techstack.split(","),
      questions: JSON.parse(questions),
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ success: false, error: error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Gracias" }, { status: 200 });
}