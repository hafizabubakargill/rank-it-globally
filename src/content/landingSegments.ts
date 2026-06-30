import {
  landingBodyAfterClutch,
  landingBodyBeforeClutch,
} from "@/content/landingBody";

const videoTestimonialsMarker = "<!-- VIDEO TESTIMONIALS -->";
const videoTestimonialsIndex = landingBodyBeforeClutch.indexOf(
  videoTestimonialsMarker,
);

if (videoTestimonialsIndex === -1) {
  throw new Error("Video testimonial section boundary was not found.");
}

export const landingBodyBeforeVideoTestimonials = landingBodyBeforeClutch.slice(
  0,
  videoTestimonialsIndex,
);

export const landingBodyAfterVideoTestimonials = landingBodyAfterClutch;
