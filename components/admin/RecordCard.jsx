'use client';

import { useState } from 'react';

const statusStyles = {
  new: 'bg-amber-100 text-amber-800',
  responded: 'bg-emerald-100 text-emerald-800',
  closed: 'bg-gray-200 text-gray-600',
};

export default function RecordCard({ record, type, onUpdateStatus }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <div>
          <h3 className="text-base">
            {record.name}
            {record.business_name && <span className="opacity-60"> — {record.business_name}</span>}
          </h3>
          <p className="text-sm opacity-70">{record.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`font-mono text-xs uppercase px-2 py-1 rounded ${statusStyles[record.status]}`}>
            {record.status}
          </span>
          <span className="opacity-50">{expanded ? '▲' : '▼'}</span>
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-sand pt-4">
          {record.phone && <p className="text-sm mb-1"><strong>Phone:</strong> {record.phone}</p>}
          {record.location && <p className="text-sm mb-1"><strong>Location:</strong> {record.location}</p>}
          {record.notes && <p className="text-sm mb-1"><strong>Notes:</strong> {record.notes}</p>}
          {record.message && <p className="text-sm mb-1"><strong>Message:</strong> {record.message}</p>}
          <p className="text-xs opacity-50 mt-2">
            Submitted: {new Date(record.submitted_at).toLocaleString()}
          </p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => onUpdateStatus(type, record.id, 'responded')}
              className="text-xs bg-emerald-600 text-white px-3 py-1.5 rounded"
            >
              Mark Responded
            </button>
            <button
              onClick={() => onUpdateStatus(type, record.id, 'closed')}
              className="text-xs bg-navy text-white px-3 py-1.5 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}