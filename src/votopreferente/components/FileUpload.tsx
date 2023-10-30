import { useState, ChangeEvent, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FirebaseStorage } from '../../firebase/config';

interface FormProps {
    zona: string;
    puesto: string;
    mesa: string;
  }
  

const FileUpload: React.FC<FormProps> = ({ zona, puesto, mesa  }) => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [downloadURL, setDownloadURL] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {

    const fileName = `${zona}_${puesto}_${mesa}.pdf`;
  
      const storageRef = ref(FirebaseStorage, `pdf/${fileName}`);

      uploadBytes(storageRef, file).then((snapshot: any) => {
        const newProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(newProgress);
        alert('Archivo cargado')
      }, 
      (error: any) => {
        console.error(error);
      },
      );
    }
  };

  useEffect(() => {
    const fileName = `${zona}_${puesto}_${mesa}.pdf`;
    const storageRef = ref(FirebaseStorage, `pdf/${fileName}`);
debugger
    getDownloadURL(storageRef)
    .then((url) => {
        setDownloadURL(url);
    })
    .catch((error) => {
        console.error('Error al obtener la URL de descarga:', error);
    });

  }, [zona, puesto, mesa]);

  const handleDownload = () => {
    // Agregar lógica de descarga aquí (por ejemplo, abrir una nueva ventana o redirigir a la URL de descarga)
    window.open(downloadURL, '_blank');
  };

  return (
    <div className='upload'>
        <input
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            className='file-input'
        />
        <button onClick={handleUpload} className='upload-button'>
            Subir archivo
        </button>
        <div>
            {progress > 0 && (
            <p className='progress-message'>
                Progreso de carga: {Math.round(progress)}%
            </p>
            )}
            {downloadURL && (
                <div>
                    <button onClick={handleDownload}>Descargar PDF</button>
                </div>
            )}
        </div>
    </div>
  );
};

export default FileUpload;
