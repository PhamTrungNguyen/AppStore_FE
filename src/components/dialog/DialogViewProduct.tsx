import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import props.image1 from "../../images/props.image1.jpg";
// import props.image2 from "../../images/props.image2.jpg";
import promotion from "../../images/promotion.jpg";
import Star from "../star/Star";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs({ check, getOpen, ...props }: any) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("s");
  const [changeImage, setChangeImage] = React.useState(props.image1);
  const [number, setNumber] = React.useState(0);
  const handlerIncrease = () => {
    setNumber((number) => number + 1);
  };
  const handlerReduce = () => {
    if (number <= 0) {
      setNumber(0);
    } else setNumber((number) => number - 1);
  };
  const handlerClickSize = (e: any, size: string) => {
    setActive(size);
  };
  const handlerClickImage = (e: any, image: any) => {
    setChangeImage(image);
  };
  const handleClose = () => {
    setOpen(false);
    getOpen(false);
  };
  React.useEffect(() => {
    setOpen(check);
  }, [check]);
  return (
    <div>
      <BootstrapDialog
        maxWidth="xl"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title "
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <div className="flex gap-x-[100px] max-md:flex-col-reverse max-md:gap-y-[10px] items-center">
            <div>
              <div className="w-[239px]">
                <img
                  src={changeImage}
                  alt=""
                  className="product-imageMain object-cover w-full h-full"
                />
              </div>
              <div className="flex gap-x-[10px] mt-[20px] ">
                <div
                  className={`product-activeImage ${
                    changeImage === props.image1 ? "active" : ""
                  } w-[100px] h-[80px] px-[10px] border-[1px]`}
                  onClick={(e) => handlerClickImage(e, props.image1)}
                >
                  <img
                    src={props.image1}
                    alt=""
                    className="w-full h-full object-contain cursor-pointer"
                  />
                </div>
                <div
                  className={`product-activeImage ${
                    changeImage === props.image2 ? "active" : ""
                  } w-[100px] h-[80px] px-[10px] border-[1px]`}
                  onClick={(e) => handlerClickImage(e, props.image2)}
                >
                  <img
                    src={props.image2}
                    alt=""
                    className=" w-full h-full object-contain cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="mr-[30px]">
              <div>
                <h3 className="text-[24px] font-semibold">V??y Billy Knit</h3>
                <div className="text-[14px]">
                  Th????ng hi???u:{" "}
                  <span className="text-[#007bff] pr-[10px]">Mango</span>
                  M?? s???n ph???m:
                  <span className="text-[#007bff] ml-[5px]">VA006</span>
                </div>
                <div className="flex items-center mt-[5px]">
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <span className="text-[12px] ml-[10px]">(1 ????nh gi??)</span>
                </div>
                <div className="flex gap-x-[10px] mt-[10px] items-center">
                  <span className=" text-[#df0000] font-semibold text-[20px]">
                    2,150,000??
                  </span>
                  <span className="line-through text-[16px] ">4,300,000??</span>
                  <span className="px-[8px] py-[3px] bg-[#d84144] text-[14px] rounded-full text-[white]">
                    -50%
                  </span>
                </div>
                <div className="text-[15px]  mt-[10px]  font-bold">
                  K??ch th?????c:
                  <div className="flex gap-x-[10px] mt-[5px]  duration-300 cursor-pointer">
                    <span
                      onClick={(e) => handlerClickSize(e, "s")}
                      className={`size px-[10px] py-[5px] rounded-lg border-[1px] text-[12px] ${
                        active === "s" ? "active" : ""
                      }`}
                    >
                      S
                    </span>
                    <span
                      onClick={(e) => handlerClickSize(e, "m")}
                      className={`size px-[10px] py-[5px] rounded-lg border-[1px] text-[12px] ${
                        active === "m" ? "active" : ""
                      }`}
                    >
                      M
                    </span>
                    <span
                      onClick={(e) => handlerClickSize(e, "l")}
                      className={`size px-[10px] py-[5px] rounded-lg border-[1px] text-[12px] ${
                        active === "l" ? "active" : ""
                      }`}
                    >
                      L
                    </span>
                  </div>
                </div>
                <div className=" p-[20px] relative text-[14px] border-2 border-dashed border-red-900 mt-[20px] ">
                  <div className="flex items-center gap-x-[5px] p-[10px] bg-white absolute top-[-20px] left-[5%]">
                    <img src={promotion} alt="" className="object-cover" />
                    <span className="uppercase text-[#b00002] text-[14px]">
                      Khuy???n m??i - ??u ????i
                    </span>
                  </div>
                  <li>
                    Nh???p m?? EGANY th??m 5% ????n h??ng{" "}
                    <a href="#" className="text-blue-500">
                      Sao ch??p
                    </a>
                  </li>
                  <li>H??? tr??? 10.000 ph?? Ship cho ????n h??ng t??? 200.000?? </li>
                  <li>Mi???n ph?? Ship cho ????n h??ng t??? 300.000?? </li>
                  <li>?????i tr??? trong 30 ng??y n???u s???n ph???m l???i b???t k?? </li>
                </div>
                <div className="mt-[20px] flex  gap-x-[10px]">
                  <div className="flex items-center gap-x-[40px] max-md:gap-x-[20px] rounded-lg p-[10px] border-[1px] text-[14p]x">
                    <svg
                      onClick={() => handlerReduce()}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 cursor-pointer hover:text-[#cd6420] duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                    <span>{number}</span>
                    <svg
                      onClick={() => handlerIncrease()}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 cursor-pointer hover:text-[#cd6420] duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                  <button className="w-full rounded-lg uppercase text-[#cd6420] text-[15px] py-[5px] border-[#cd6420] border-[1px] hover:bg-[#cd6420] hover:text-white duration-300">
                    Th??m v??o gi???
                  </button>
                </div>
              </div>
            </div>
          </div>
        </BootstrapDialogTitle>
      </BootstrapDialog>
    </div>
  );
}
