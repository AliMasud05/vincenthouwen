const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="!p-0">{children}</main>
    </>
  );
};

export default CommonLayout;
