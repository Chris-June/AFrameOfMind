"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Link as LinkIcon } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Understanding Anxiety",
    description: "Learn about anxiety symptoms, triggers, and coping strategies.",
    type: "guide",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Meditation Basics",
    description: "A beginner's guide to meditation and mindfulness practices.",
    type: "video",
    icon: Video,
  },
  {
    id: 3,
    title: "Stress Management",
    description: "Practical techniques for managing daily stress and pressure.",
    type: "pdf",
    icon: FileText,
  },
  {
    id: 4,
    title: "Support Networks",
    description: "How to build and maintain supportive relationships.",
    type: "link",
    icon: LinkIcon,
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Expert Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access professional resources designed to support your mental health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <resource.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Access Resource
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Browse All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}