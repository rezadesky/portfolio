export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] dark:from-primary/[0.08] dark:via-transparent dark:to-primary/[0.03]" />
      <div className="absolute left-1/4 top-1/4 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-primary/10 blur-[80px] md:blur-[120px] dark:bg-primary/15" />
      <div className="absolute right-1/4 top-3/4 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full bg-primary/8 blur-[80px] md:blur-[120px] dark:bg-primary/12" />
      <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] md:h-[300px] md:w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[60px] md:blur-[120px] dark:bg-primary/8" />
    </div>
  );
}
