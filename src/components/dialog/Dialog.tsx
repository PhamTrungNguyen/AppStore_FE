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
                <h3 className="text-[24px] font-semibold">Váy Billy Knit</h3>
                <div className="text-[14px]">
                  Thương hiệu:{" "}
                  <span className="text-[#007bff] pr-[10px]">Mango</span>
                  Mã sản phẩm:
                  <span className="text-[#007bff] ml-[5px]">VA006</span>
                </div>
                <div className="flex items-center mt-[5px]">
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <span className="text-[12px] ml-[10px]">(1 đánh giá)</span>
                </div>
                <div className="flex gap-x-[10px] mt-[10px] items-center">
                  <span className=" text-[#df0000] font-semibold text-[20px]">
                    2,150,000đ
                  </span>
                  <span className="line-through text-[16px] ">4,300,000đ</span>
                  <span className="px-[8px] py-[3px] bg-[#d84144] text-[14px] rounded-full text-[white]">
                    -50%
                  </span>
                </div>
                <div className="text-[15px]  mt-[10px]  font-bold">
                  Kích thước:
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
                      Khuyến mãi - ưu đãi
                    </span>
                  </div>
                  <li>
                    Nhập mã EGANY thêm 5% đơn hàng{" "}
                    <a href="#" className="text-blue-500">
                      Sao chép
                    </a>
                  </li>
                  <li>Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ </li>
                  <li>Miễn phí Ship cho đơn hàng từ 300.000đ </li>
                  <li>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì </li>
                </div>
              </div>
            </div>
          </div>
        </BootstrapDialogTitle>
      </BootstrapDialog>
    </div>
  );
}