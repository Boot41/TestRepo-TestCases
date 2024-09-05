const ComplianceAlert = ({ message, actions }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 mb-4" style={{ fontFamily: '"Roboto", sans-serif' }}>
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#212121', lineHeight: '1.5' }}>Compliance Alert</h2>
      <p className="text-lg" style={{ color: '#757575', lineHeight: '1.6' }}>{message}</p>
      <div className="mt-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="bg-green-500 text-white font-medium py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out mr-2"
            style={{ marginTop: '8px' }}
            onClick={action.onClick}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};