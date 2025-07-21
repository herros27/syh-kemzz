import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);

// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
// import init, * as wasm from "./pkg/validation_semantic.js";

// function App() {
//     const [result, setResult] = useState(null);
//     // isLoading akan true saat Wasm init, dan true lagi saat validasi via tombol
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [wasmInitialized, setWasmInitialized] = useState(false);

//     // Efek untuk inisialisasi Wasm hanya sekali saat komponen dimuat
//     useEffect(() => {
//         async function initializeWasm() {
//             // setIsLoading(true); // Sudah true secara default
//             setError(null); // Bersihkan error sebelumnya jika ada (meski ini hanya jalan sekali)
//             try {
//                 await init();
//                 wasm.init_panic_hook();
//                 setWasmInitialized(true);
//                 console.log("Wasm module initialized.");
//             } catch (err) {
//                 console.error("Error initializing Wasm module:", err);
//                 setError("Gagal memuat modul validasi Wasm.");
//             } finally {
//                 setIsLoading(false); // Selesai proses inisialisasi Wasm (baik sukses atau gagal)
//             }
//         }
//         initializeWasm();
//     }, []); // Array dependensi kosong, hanya berjalan sekali

//     // Fungsi yang akan dipanggil ketika tombol validasi diklik
//     const handleValidateClick = async () => {
//         if (!wasmInitialized) {
//             // Seharusnya tombol di-disable, tapi sebagai fallback
//             setError("Modul Wasm belum siap. Harap tunggu.");
//             return;
//         }

//         setIsLoading(true); // Mulai loading untuk proses validasi
//         setError(null); // Bersihkan error validasi sebelumnya
//         setResult(null); // Bersihkan hasil validasi sebelumnya

//         try {
//             const supportedModels = wasm.getSupportedModelSelectors();
//             console.log("Supported Models:", supportedModels);

//             // Pilih model (contoh: GEMINI_2_FLASH)
//             const modelToUseKey = "GEMINI_2_FLASH_LITE"; // Anda bisa membuat ini dinamis jika mau
//             const modelSelectorInt = supportedModels[modelToUseKey];

//             if (typeof modelSelectorInt === "undefined") {
//                 console.error(
//                     `Model ${modelToUseKey} tidak ditemukan di supportedModels.`
//                 );
//                 // Error ini akan ditangkap oleh blok catch di bawah
//                 throw new Error(
//                     `Model ${modelToUseKey} yang dipilih tidak valid.`
//                 );
//             }

//             const input =
//                 "Jl. Kapas No.9, Semaki, Kec. Umbulharjo, Kota Yogyakarta, DIY 55166"; // Input yang akan divalidasi
//             const input_type = "Alamat Lengkap"; // Sesuaikan dengan tipe input

//             console.log(
//                 `Menggunakan Model Selector: ${modelSelectorInt} untuk ${modelToUseKey}`
//             );
//             console.log(`Input: ${input}`);
//             console.log(`Input Type: ${input_type}`);

//             const res = await wasm.validateTextJs(
//                 input,
//                 modelSelectorInt,
//                 input_type
//             );

//             console.log("Raw Result from Wasm:", res);
//             setResult(res);
//         } catch (err) {
//             console.error("Error during validation:", err);
//             let errorMessage = "Terjadi kesalahan saat validasi.";
//             if (err && typeof err.message === "string") {
//                 errorMessage = err.message;
//             } else if (typeof err === "string") {
//                 errorMessage = err;
//             } else {
//                 try {
//                     errorMessage = JSON.stringify(err);
//                 } catch (e) {
//                     /* abaikan error serialisasi */
//                 }
//             }
//             setError(errorMessage);
//         } finally {
//             setIsLoading(false); // Selesai proses validasi
//         }
//     };

//     // Logika untuk menampilkan konten berdasarkan state
//     let statusDisplay;
//     if (!wasmInitialized && isLoading) {
//         // Tahap 1: Wasm sedang diinisialisasi
//         statusDisplay = <p>Menginisialisasi Wasm...</p>;
//     } else if (!wasmInitialized && error) {
//         // Tahap 1 Gagal: Error saat inisialisasi Wasm
//         statusDisplay = (
//             <div
//                 style={{
//                     marginTop: "20px",
//                     padding: "10px",
//                     border: "1px solid red",
//                     borderRadius: "5px",
//                     backgroundColor: "#ffebee",
//                 }}
//             >
//                 <h3 style={{ color: "red", marginTop: "0" }}>
//                     Inisialisasi Gagal:
//                 </h3>
//                 <pre
//                     style={{
//                         color: "darkred",
//                         whiteSpace: "pre-wrap",
//                         wordBreak: "break-all",
//                     }}
//                 >
//                     {error}
//                 </pre>
//             </div>
//         );
//     } else if (wasmInitialized) {
//         // Tahap 2: Wasm sudah siap
//         if (isLoading) {
//             // Validasi sedang berjalan (setelah tombol diklik)
//             statusDisplay = (
//                 <p style={{ marginTop: "10px" }}>
//                     Memvalidasi input, harap tunggu...
//                 </p>
//             );
//         } else if (error) {
//             // Validasi gagal
//             statusDisplay = (
//                 <div
//                     style={{
//                         marginTop: "20px",
//                         padding: "10px",
//                         border: "1px solid red",
//                         borderRadius: "5px",
//                         backgroundColor: "#ffebee",
//                     }}
//                 >
//                     <h3 style={{ color: "red", marginTop: "0" }}>
//                         Validasi Gagal:
//                     </h3>
//                     <pre
//                         style={{
//                             color: "darkred",
//                             whiteSpace: "pre-wrap",
//                             wordBreak: "break-all",
//                         }}
//                     >
//                         {error}
//                     </pre>
//                 </div>
//             );
//         } else if (result) {
//             // Validasi sukses dan ada hasil
//             statusDisplay = (
//                 <div style={{ marginTop: "20px" }}>
//                     <h3>Hasil Validasi:</h3>
//                     <pre
//                         style={{
//                             backgroundColor: "#f0f0f0",
//                             padding: "10px",
//                             borderRadius: "5px",
//                         }}
//                     >
//                         {JSON.stringify(result, null, 2)}
//                     </pre>
//                 </div>
//             );
//         } else {
//             // Wasm siap, tidak sedang loading validasi, tidak ada error, tidak ada result
//             // Ini adalah kondisi awal setelah Wasm siap, atau setelah validasi yang tidak menghasilkan result (jika mungkin)
//             statusDisplay = (
//                 <p style={{ marginTop: "10px" }}>
//                     Klik tombol "Mulai Validasi Input" untuk memulai.
//                 </p>
//             );
//         }
//     }

//     return (
//         <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//             <h1>Demo Validasi Semantic dengan LLM dan Rust WASM</h1>

//             {/* Tombol hanya ditampilkan jika Wasm sudah siap */}
//             {wasmInitialized && (
//                 <button
//                     onClick={handleValidateClick}
//                     disabled={isLoading} // Tombol di-disable saat Wasm init ATAU saat validasi berjalan
//                     style={{
//                         padding: "10px 15px",
//                         fontSize: "16px",
//                         cursor: "pointer",
//                     }}
//                 >
//                     {/* Teks tombol berubah jika sedang loading validasi */}
//                     {isLoading && wasmInitialized
//                         ? "Memvalidasi..."
//                         : "Mulai Validasi Input"}
//                 </button>
//             )}

//             {/* Menampilkan status atau hasil */}
//             {statusDisplay}
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
