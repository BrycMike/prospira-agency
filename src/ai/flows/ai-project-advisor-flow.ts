'use server';
/**
 * @fileOverview An AI-powered tool that analyzes a user's project requirements to recommend a tech stack and development roadmap.
 *
 * - getAIProjectAdvisorRecommendations - A function that handles the project advisor process.
 * - AIProjectAdvisorInput - The input type for the getAIProjectAdvisorRecommendations function.
 * - AIProjectAdvisorOutput - The return type for the getAIProjectAdvisorRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIProjectAdvisorInputSchema = z.object({
  projectDescription: z
    .string()
    .describe("A detailed description of the client's project idea."),
});
export type AIProjectAdvisorInput = z.infer<typeof AIProjectAdvisorInputSchema>;

const AIProjectAdvisorOutputSchema = z.object({
  techStackRecommendations: z
    .array(z.string())
    .describe('Preliminary recommendations for the core technologies and frameworks for the project, such as React, Next.js, Node.js, Firebase, AWS, specific databases, etc. Focus on technologies relevant to Team Prospira\'s expertise (Custom Web, Mobile, SaaS, Game Dev, AI, Cloud).'),
  developmentRoadmap: z
    .array(
      z.object({
        step: z.string().describe('The name of the development phase or step (e.g., Discovery, UI/UX Design, Backend Development).'),
        description: z.string().describe('A brief description of what this development phase entails and its objectives.'),
      })
    )
    .describe('A high-level, step-by-step development roadmap outlining the typical phases a project like this would go through with Team Prospira.'),
});
export type AIProjectAdvisorOutput = z.infer<typeof AIProjectAdvisorOutputSchema>;

export async function getAIProjectAdvisorRecommendations(
  input: AIProjectAdvisorInput
): Promise<AIProjectAdvisorOutput> {
  return aiProjectAdvisorFlow(input);
}

const aiProjectAdvisorPrompt = ai.definePrompt({
  name: 'aiProjectAdvisorPrompt',
  input: {schema: AIProjectAdvisorInputSchema},
  output: {schema: AIProjectAdvisorOutputSchema},
  prompt: `You are an AI Project Advisor for Team Prospira, a modern software development agency specializing in:
- Custom Web Development
- Web Applications
- Mobile Applications
- SaaS Platforms
- Game Development
- UI/UX Design
- Cloud Infrastructure
- AI Automation

Your goal is to provide potential clients with preliminary recommendations for a tech stack and a high-level development roadmap based on their project idea. This should give them a sense of how Team Prospira would approach their needs and the project's scope.

Be professional, concise, and ensure your recommendations align with the services Team Prospira offers.

Client's Project Idea:
{{{projectDescription}}}

Based on the project idea above, please provide:
1.  Preliminary Tech Stack Recommendations.
2.  A High-Level Development Roadmap.`,
});

const aiProjectAdvisorFlow = ai.defineFlow(
  {
    name: 'aiProjectAdvisorFlow',
    inputSchema: AIProjectAdvisorInputSchema,
    outputSchema: AIProjectAdvisorOutputSchema,
  },
  async input => {
    const {output} = await aiProjectAdvisorPrompt(input);
    return output!;
  }
);
