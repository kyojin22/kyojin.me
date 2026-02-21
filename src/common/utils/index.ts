export function handleDownload() {
  const link = document.createElement("a");
  link.href = "/files/Resume_Muhammadbobur_Abdukarimov.pdf";
  link.download = "Resume_Muhammadbobur_Abdukarimov.pdf";
  link.click();
}
