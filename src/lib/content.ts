import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export type Category =
  | "tecnologia"
  | "carros"
  | "brasil"
  | "mundo"
  | "esporte";

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: Category;
  published: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type Episode = {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  videoId: string;
  thumbnail: string;
  published: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type EventItem = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  coverImage: string;
  address: string;
  ticketUrl: string;
  startDate: string;
  endDate: string;
  published: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export async function getPublishedPosts() {
  const q = query(
    collection(db, "posts"),
    where("published", "==", true),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Post[];
}

export async function getPublishedPostsByCategory(category: Category) {
  const q = query(
    collection(db, "posts"),
    where("published", "==", true),
    where("category", "==", category),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Post[];
}

export async function getPostBySlug(slug: string) {
  const q = query(
    collection(db, "posts"),
    where("published", "==", true),
    where("slug", "==", slug),
    limit(1)
  );

  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as Post;
}

export async function getPublishedEpisodes() {
  const q = query(
    collection(db, "episodes"),
    where("published", "==", true),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Episode[];
}

export async function getPublishedEvents() {
  const q = query(
    collection(db, "events"),
    where("published", "==", true),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as EventItem[];
}

export async function getEventBySlug(slug: string) {
  const q = query(
    collection(db, "events"),
    where("published", "==", true),
    where("slug", "==", slug),
    limit(1)
  );

  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as EventItem;
}