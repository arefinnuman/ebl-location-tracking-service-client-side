const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg p-4 w-full sm:w-80">
        <h2 className="text-xl font-semibold mb-2">Confirm Delete</h2>
        <p className="mb-3">Are you sure you want to delete this?</p>
        <div className="flex justify-end">
          <button
            className="px-3 py-1 mr-2 bg-primary text-white rounded hover:bg-red-600 transition duration-300"
            onClick={onConfirm}
          >
            Delete
          </button>
          <button
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-success transition duration-300"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;

