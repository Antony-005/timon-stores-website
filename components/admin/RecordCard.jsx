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
        className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 sm:p-5 text-left"
      >
        <div className="min-w-0">
          <h3 className="text-base break-words">{record.name}</h3>
          {record.business_name && (
            <p className="text-sm opacity-60 break-words">{record.business_name}</p>
          )}
          <p className="text-sm opacity-70 break-words">{record.email}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className={`font-mono text-xs uppercase px-2 py-1 rounded whitespace-nowrap ${statusStyles[record.status]}`}>
            {record.status}
          </span>
          <span className="opacity-50">{expanded ? '\u25B2' : '\u25BC'}</span>
        </div>
      </button>

      {expanded && (
        <div className="px-4 sm:px-5 pb-5 border-t border-sand pt-4">
          {record.phone && <p className="text-sm mb-1 break-words"><strong>Phone:</strong> {record.phone}</p>}
          {record.location && <p className="text-sm mb-1 break-words"><strong>Location:</strong> {record.location}</p>}
          {record.notes && <p className="text-sm mb-1 break-words"><strong>Notes:</strong> {record.notes}</p>}
          {record.message && <p className="text-sm mb-1 break-words"><strong>Message:</strong> {record.message}</p>}
          <p className="text-xs opacity-50 mt-2">
            Submitted: {new Date(record.submitted_at).toLocaleString()}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
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