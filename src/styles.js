const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-white lg:text-[75px] sm:text-[57px] xs:text-[42px] text-[30px] lg:leading-[90px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[40px] sm:text-[26px] md:text-[35px] xs:text-[20px] text-[13px] lg:leading-[70px] xs:leading-[5px] sm:leading-[40px] leading-[5px] sm:py-3 py-10",
  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
    hoveronNavbar:
      "relative transition-all duration-500 content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-[#4d0154] before:via-[#daa3df] before:to-[#793d7f] hover:before:w-full hover:before:opacity-100"
};


const popup = {
  popup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "35%",
    height: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "1px solid rgb(201, 201, 201)",
    borderRadius: "10px",
    padding: "20px",
    zIndex: "1000",
    overflow: "auto",
  },
  button: {
    margin: "5px",
    padding: "5px 10px",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    position: "fixed",
    top: "0%",
    right: "0%",
  },
};


export { styles, popup };