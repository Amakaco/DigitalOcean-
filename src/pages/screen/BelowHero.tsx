const BelowHero = () => {
  return (
    <div className="w-full h-[2000px] flex bg-white">
      <div className="w-full h-[350px] bg-[#F9FAFE] mt-36 flex justify-between items-center">
        <div className="flex text-center">
          <h1 className="text-5xl font-bold">#1</h1>
          <p className="text-xl font-semibold">
            In IaaS usability, VPS for SMBs, & SMB Hosting on G2
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-semibold">99.99%</h1>
          <p className="text-">
            Uptime SLA for Droplets and Volumes block storage
          </p>
        </div>
        <div>
          <h1>600k</h1>
          <p>Customers building with DigitalOcean</p>
        </div>
      </div>
    </div>
  );
};

export default BelowHero;
