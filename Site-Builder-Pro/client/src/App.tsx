import { useState } from "react";

function App() {
  const [portal, setPortal] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Shepherd Manufacturing</h1>
      <p className="text-xl mb-4">A White Acre Group Company</p>
      <p className="text-lg mb-8">Buy, sell, and finance manufacturing businesses — powered by AI matching and valuations.</p>
      
      {!portal ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button onClick={() => setPortal("seller")} className="bg-blue-500 text-white p-4 rounded-lg">Seller Portal</button>
          <button onClick={() => setPortal("buyer")} className="bg-green-500 text-white p-4 rounded-lg">Buyer Portal</button>
          <button onClick={() => setPortal("investor")} className="bg-purple-500 text-white p-4 rounded-lg">Investor Portal</button>
          <button onClick={() => setPortal("lender")} className="bg-red-500 text-white p-4 rounded-lg">Lender Portal</button>
        </div>
      ) : (
        <div className="w-full max-w-2xl">
          <button onClick={() => setPortal(null)} className="mb-4 text-blue-500">Back to Home</button>
          {portal === "seller" && <SellerPortal />}
          {portal === "buyer" && <BuyerPortal />}
          {portal === "investor" && <InvestorPortal />}
          {portal === "lender" && <LenderPortal />}
        </div>
      )}
    </div>
  );
}

function SellerPortal() {
  return <div className="p-4 bg-white rounded shadow">Step-by-step seller process: Upload tax returns, P&L, equipment lists, etc.</div>;
}

// Placeholder portals — build these out next
function BuyerPortal() { return <div className="p-4 bg-white rounded shadow">Browse listings, AI-matched deals.</div>; }
function InvestorPortal() { return <div className="p-4 bg-white rounded shadow">Investment opportunities, due diligence portal.</div>; }
function LenderPortal() { return <div className="p-4 bg-white rounded shadow">Review deals for financing, AI risk assessment.</div>; }

export default App;