export const downloadPDF = () => {
  fetch("Marcin_Bugaj_CV.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Marcin_Bugaj_CV.pdf";
      alink.click();
    });
  });
};

export const scrollIntoSection = (ref: React.MutableRefObject<any>) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};
