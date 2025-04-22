function Error({ error }: { error?: string }) {
  return (
    <div className="w-full flex align-center justify-center">
      <p>{error}</p>
    </div>
  );
}

export default Error;
