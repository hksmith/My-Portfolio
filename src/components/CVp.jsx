import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { CV } from '../assets';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function CVp({ open, onClose }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50" onClick={onClose}>
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative w-full max-w-lg h-4/5 rounded-lg shadow-lg" onClick={(event) => event.stopPropagation()}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
            <div className="relative" style={{ height: '600px', width: '100%', bottom:'55px', maxWidth: '550px'}}>
              <Viewer
                fileUrl={CV}
                plugins={[
                  defaultLayoutPluginInstance,
                ]}
              />
              <button onClick={onClose} className="absolute top-5 right-0 mr-4 mt-4 text-white font-bold py-2 px-4 rounded">
                <MdOutlineCancel size={24} color='gray'/>
              </button>
            </div>
          </Worker>
        </div>
      </div>
            <style>{`
        @media only screen and (max-width: 800px) {
          .relative {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}


export default CVp;
