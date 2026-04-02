export default function NewsCard({
  title,
  category,
  image,
  className
}: {
  title: string;
  category: string;
  image: string;
  className?: string;
}) {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-6 shadow-md transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-black text-[#001A3F] rounded-lg uppercase tracking-widest shadow-sm">
          {category}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#001A3F] leading-snug group-hover:text-[#D9232E] transition-colors">
          {title}
        </h3>
        <p className="mt-3 text-slate-500 text-sm line-clamp-2 italic">
          Clique para ler o conteúdo completo desta matéria exclusiva...
        </p>
      </div>
    </div>
  );
}