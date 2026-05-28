"use strict";

"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Heart, MessageSquare, Send, Check } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import styles from "./reader.module.css";
import FadeUp from "../../../components/motion/FadeUp";
import StaggerContainer from "../../../components/motion/StaggerContainer";
import { varStaggerItem } from "../../../lib/motion/stagger";

const ALL_POSTS = [
  {
    slug: "mindfulness-practices-for-daily-life",
    title: "Mindfulness practices for daily life",
    desc: "Integrate simple micro-meditations into your busy morning commute, lunch hour, and evening digital wind-down routines.",
    category: "Mindfulness",
    date: "May 25, 2026",
    readTime: "5 min read",
    img: "/images/blog1.png",
    author: "Emily Watson",
    role: "Meditation Specialist",
    authorImg: "/images/guide1.png",
    content: [
      "In our fast-paced modern world, the idea of sitting in silent meditation for an hour can feel not only daunting but entirely unrealistic. Between emails, household responsibilities, and social obligations, our cognitive loads are heavier than ever. However, mindfulness does not require a complete lifestyle overhaul.",
      "Mindfulness is simply the quality of being fully present in the moment without judgment. By developing micro-habits—small, deliberate anchors of awareness throughout your day—you can reset your autonomic nervous system and lower ambient anxiety levels significantly.",
      "Here are three practical micro-meditations you can begin practicing today:",
      "1. The Commute Scan: If you commute via public transit or are sitting at traffic lights, turn off the music or podcasts for three minutes. Feel the weight of your body in the seat. Note the physical sensations of contact. Take three deep abdominal breaths, ensuring the exhalations are twice as long as the inhalations.",
      "2. The Culinary Anchor: When drinking your morning coffee or tea, avoid looking at your phone. Focus entirely on the temperature of the cup in your hands, the steam rising, the aroma, and the physical sensation of the liquid. If your mind wanders to your to-do list, gently guide it back to the sensory experience of the tea.",
      "3. The Transitions Breath: Before launching a Zoom meeting or walking into your home after work, pause at the door or keyboard. Close your eyes and count five slow, circular breaths. Let go of the task you just completed and clear your mental slate for the next encounter.",
      "By integrating these micro-habits, you will train your mind to access states of calm on demand, proving that mental hygiene doesn't require hours of isolation—only moments of awareness.",
    ],
  },
  {
    slug: "the-science-behind-sound-healing",
    title: "The science behind sound healing",
    desc: "Explore how acoustic resonance and brainwave entrainment can lower nervous system arousal and accelerate physical healing.",
    category: "Acoustics",
    date: "May 18, 2026",
    readTime: "7 min read",
    img: "/images/blog2.png",
    author: "Sarah Jenkins",
    role: "Sound Healing Therapist",
    authorImg: "/images/guide3.png",
    content: [
      "While sound baths are often grouped with modern esoteric practices, the science of acoustic therapy is rooted in deep neurological and physiological principles. Sound healing, or acoustic therapy, uses specific wave frequencies to induce physical and emotional resonance in the human body.",
      "The primary mechanism behind sound healing is called brainwave entrainment. Our brains operate on electrical pulses that represent different mental states: Beta waves (stress/activity), Alpha waves (relaxation), Theta waves (deep meditation/dream), and Delta waves (deep sleep/healing).",
      "During an acoustic gong bath or singing bowl session, the repetitive, harmonic sound frequencies slow down our neural oscillations. The brain naturally synchronizes its internal rhythms with the acoustic frequencies, transitioning from active Beta states into relaxing Alpha or deep Theta states.",
      "Physiologically, this neurological shift triggers the parasympathetic nervous system—our 'rest and digest' response. Heart rate slows, blood vessels dilate, and muscular tension releases. Furthermore, acoustic waves directly stimulate the vagus nerve, which runs from the brainstem to the abdomen, regulating stress hormones like cortisol.",
      "Whether you are listening to Himalayan singing bowls, binaural beats, or planetary gongs, sound healing provides a fast, passive gateway to meditative states, making it an excellent resource for individuals who struggle with traditional silent meditation.",
    ],
  },
  {
    slug: "gentle-yoga-poses-for-beginners",
    title: "Gentle yoga poses for beginners",
    desc: "Five fundamental, restorative poses you can practice right in your bed to release tension, stretch joints, and improve spinal alignment.",
    category: "Yoga",
    date: "May 10, 2026",
    readTime: "6 min read",
    img: "/images/blog3.png",
    author: "Marcus Vance",
    role: "Yoga & Somatic Coach",
    authorImg: "/images/guide2.png",
    content: [
      "Starting a yoga practice doesn't require standing on your head or possessing hyper-flexible hamstrings. Yoga is first and foremost a breathing practice, with physical postures (asanas) serving as containers to channel and release somatic energy.",
      "For beginners, the goal is simple: stretch joints, release fascia (the connective tissue that tightens under stress), and synchronize muscle contractions with deep, relaxed breaths.",
      "Here are three gentle, restorative postures you can practice right on your living room rug or bed to release physical tension:",
      "1. Child's Pose (Balasana): Kneel on the floor, bring your big toes together, and sit on your heels. Separate your knees hip-width apart. Fold forward, placing your torso between your thighs, and rest your forehead on the mat. Extend your arms forward, palms down. Focus on breathing into the back of your rib cage, widening your spine with every inhalation.",
      "2. Legs-Up-the-Wall Pose (Viparita Karani): Sit with your hip against a wall, lie back, and sweep your legs up the wall. Rest your shoulders and head on the floor, letting your arms fall out to the sides, palms up. This inversion drains blood and lymph from the lower limbs, relieves back strain, and induces immediate parasympathetic relaxation.",
      "3. Cat-Cow Stretch (Marjaryasana-Bitilasana): Start on your hands and knees in a tabletop position. Inhale, drop your belly toward the mat, lift your chest and chin, looking slightly upward (Cow). Exhale, round your spine toward the ceiling, tuck your chin to your chest, and pull your belly button in (Cat). Repeat this flow for 2 minutes to lubricate the spinal discs.",
      "Remember, yoga is not about how the pose looks, but how it feels. Focus on keeping your breaths long, smooth, and conscious.",
    ],
  },
];

export default function BlogReaderPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const post = ALL_POSTS.find((p) => p.slug === slug) || ALL_POSTS[0];
  const relatedPosts = ALL_POSTS.filter((p) => p.slug !== post.slug);

  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    { name: "Jessica R.", text: "This was exactly what I needed to read today. Micro-meditations feel so much more achievable than a full 30 minutes!", date: "May 26, 2026" },
    { name: "Thomas K.", text: "I tried the culinary anchor exercise with my morning espresso today. It's wild how much noise is in our heads when we slow down.", date: "May 25, 2026" },
  ]);
  const [commentSuccess, setCommentSuccess] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentName.trim() && commentText.trim()) {
      const newComment = {
        name: commentName,
        text: commentText,
        date: "Just now",
      };
      setComments((prev) => [newComment, ...prev]);
      setCommentName("");
      setCommentText("");
      setCommentSuccess(true);
      setTimeout(() => setCommentSuccess(false), 3000);
    }
  };

  return (
    <article className={styles.readerWrapper}>
      {/* Top Navigation */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to Journal</span>
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        {/* Title Header */}
        <header className={styles.header}>
          <FadeUp>
            <span className={styles.categoryTag}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
          </FadeUp>
          
          <FadeUp delay={0.15}>
            <p className={styles.desc}>{post.desc}</p>
          </FadeUp>
          
          <FadeUp delay={0.25}>
            <div className={styles.meta}>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>
                  <Image src={post.authorImg} alt={post.author} fill className={styles.avatarImg} />
                </div>
                <div>
                  <span className={styles.authorName}>{post.author}</span>
                  <span className={styles.authorRole}>{post.role}</span>
                </div>
              </div>
              <div className={styles.metaRight}>
                <span className={styles.metaItem}>
                  <Calendar size={14} className={styles.metaIcon} />
                  <span>{post.date}</span>
                </span>
                <span className={styles.metaItem}>
                  <Clock size={14} className={styles.metaIcon} />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </FadeUp>
        </header>

        {/* Feature Cover Image */}
        <FadeUp delay={0.35} className={styles.coverImageFrame}>
          <Image
            src={post.img}
            alt={post.title}
            fill
            priority
            className={styles.coverImage}
            sizes="100vw"
          />
        </FadeUp>

        {/* Article Body Content */}
        <div className={styles.articleBody}>
          {post.content.map((paragraph, idx) => {
            if (paragraph.startsWith("1.") || paragraph.startsWith("2.") || paragraph.startsWith("3.")) {
              return (
                <FadeUp key={idx} delay={0.1} className={styles.pointCard}>
                  <p className={styles.pointText}>{paragraph}</p>
                </FadeUp>
              );
            }
            if (idx === 1) {
              return (
                <blockquote key={idx} className={styles.pullQuote}>
                  <p>{paragraph}</p>
                </blockquote>
              );
            }
            return (
              <FadeUp key={idx} delay={0.15}>
                <p className={styles.paragraph}>{paragraph}</p>
              </FadeUp>
            );
          })}
        </div>

        {/* Article Engagement Panel */}
        <div className={styles.engagementPanel}>
          <m.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleLike}
            className={`${styles.likeBtn} ${hasLiked ? styles.liked : ""}`}
            aria-label="Like this article"
          >
            <Heart size={18} fill={hasLiked ? "currentColor" : "none"} />
            <span>{likes} Likes</span>
          </m.button>
          <div className={styles.shareLine}>
            <span>Share:</span>
            <a href="#">Twitter</a>
            <span>•</span>
            <a href="#">Facebook</a>
          </div>
        </div>

        {/* Comments Section */}
        <section className={styles.commentsSection}>
          <h3 className={styles.sectionTitle}>
            <MessageSquare size={20} className={styles.titleIcon} />
            <span>Discussion ({comments.length})</span>
          </h3>

          <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="comment-name">Your Name</label>
                <input
                  type="text"
                  id="comment-name"
                  required
                  placeholder="Enter name"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className={styles.formInput}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="comment-text">Your Thoughts</label>
              <textarea
                id="comment-text"
                required
                placeholder="Share your perspective on this article..."
                rows={4}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className={styles.formTextarea}
              />
            </div>
            <m.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: "flex-start" }}
            >
              <Send size={14} />
              <span>Post Comment</span>
            </m.button>

            {commentSuccess && (
              <span className={styles.commentSuccess}>
                <Check size={14} />
                <span>Comment posted successfully!</span>
              </span>
            )}
          </form>

          {/* Comments List wrapping dynamic exit/entry animations */}
          <div className={styles.commentsList}>
            <AnimatePresence>
              {comments.map((comm, idx) => (
                <m.div
                  key={comm.name + idx}
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={styles.commentCard}
                >
                  <div className={styles.commentHeader}>
                    <span className={styles.commName}>{comm.name}</span>
                    <span className={styles.commDate}>{comm.date}</span>
                  </div>
                  <p className={styles.commText}>{comm.text}</p>
                </m.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Related Articles Banner */}
        <section className={styles.relatedSection}>
          <h3 className={styles.relatedTitle}>You might also like:</h3>
          <div className={styles.relatedGrid}>
            {relatedPosts.slice(0, 2).map((rel, idx) => (
              <Link key={idx} href={`/blog/${rel.slug}`} className={styles.relatedCard}>
                <div className={styles.relatedImgFrame}>
                  <Image src={rel.img} alt={rel.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.relatedContent}>
                  <span className={styles.relatedTag}>{rel.category}</span>
                  <h4>{rel.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
