const UploadResume = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">

      <h1 className="text-3xl font-bold mb-6">
        Upload Your Resume 📄
      </h1>

      <div className="border-2 border-dashed p-10 rounded text-center">
        <p className="mb-4 text-gray-600">
          Drag & Drop your resume here or click to upload
        </p>

        <input type="file" className="mb-4" />

        <button className="bg-black text-white px-6 py-2 rounded">
          Upload
        </button>
      </div>

    </div>
  );
};

export default UploadResume;