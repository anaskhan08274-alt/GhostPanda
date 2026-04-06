const History = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-10">
          Resume History
        </h1>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Resume Name</th>
                <th className="p-4 text-left">ATS Score</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">Resume_Anas.pdf</td>
                <td className="p-4 text-green-600 font-semibold">78</td>
                <td className="p-4">12 Mar 2026</td>
                <td className="p-4">
                  <button className="bg-black text-white px-4 py-2 rounded">
                    View
                  </button>
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Resume_Developer.pdf</td>
                <td className="p-4 text-green-600 font-semibold">82</td>
                <td className="p-4">20 Mar 2026</td>
                <td className="p-4">
                  <button className="bg-black text-white px-4 py-2 rounded">
                    View
                  </button>
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default History;