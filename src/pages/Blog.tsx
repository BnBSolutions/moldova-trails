import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/tours';
import ScrollReveal from '@/components/shared/ScrollReveal';
import heroVineyard from '@/assets/hero-vineyard.jpg';
import wineTasting from '@/assets/wine-tasting.jpg';
import localFood from '@/assets/local-food.jpg';

const blogImages = [wineTasting, heroVineyard, localFood];

const Blog = () => {
  return (
    <main className="pt-20">
      <section className="py-20 bg-primary grain">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-xl mx-auto"
          >
            Ghiduri de călătorie, sfaturi și povești din Moldova.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500">
                  <div className="overflow-hidden aspect-[16/10]">
                    <img
                      src={blogImages[i]}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="px-2.5 py-1 bg-accent/10 text-accent rounded-full font-medium">{post.category}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                      Citește mai mult <ArrowRight size={14} />
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
