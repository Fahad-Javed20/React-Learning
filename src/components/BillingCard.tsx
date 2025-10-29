interface BillingCardProps {
  name: string;
  description: string;
  billAmount: number;
}

const BillingCard = ({ name, description, billAmount }: BillingCardProps) => {
  return (
      
    <div className="grid w-230 grid-cols-2 gap-15 p-8 bg-white border rounded-2xl shadow-md items-center">
      <div className="space-y-3 text-left pl-10">
        <p className="font-bold text-lg text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-red-400 to-purple-400">
          CRM for Everyone
        </p>
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-gray-600">
         {description}
        </p>
      </div>

      <div className="text-center ">
        <span className="text-2xl font text-gray-400">US$</span>
        <span className="text-5xl font-bold">{billAmount}</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
        <button className="px-3 py-2 bg-blue-100 font-semibold border-blue-800 rounded mt-3">
          What are team Users?
        </button>
      </div>



    
    </div>

    
  );
};

export default BillingCard;
