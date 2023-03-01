import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <section className="notify-register-section">
        <div className="notify-register">
          <div className="input-container">
            <label>
              <i className="fa-regular fa-envelope"></i> Đăng kí nhận bảng tin
            </label>
            <input type="email" placeholder="Nhập địa chỉ email của bạn" />
            <div className="register-btn">
              <button>Đăng ký</button>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section">
        <footer className="footer">
          <div className="left-box">
            <div className="logo">
              OBS.Com <i className="fa-solid fa-book-open-reader"></i>
            </div>
            <div className="footer-note">
              <p>
                OBS.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ
                trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả
                Hệ Thống OBS trên toàn quốc.{" "}
              </p>
            </div>
            <div className="footer-icons">
              <div className="icon">
                <i className="fa-brands fa-facebook-f"></i>{" "}
              </div>
              <div className="icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-tumblr"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-pinterest-p"></i>{" "}
              </div>
            </div>
            <div className="download-links">
              <img src="/assets/images/footer/googleplay.png" />
              <img src="/assets/images/footer/appstore.png" />
            </div>
          </div>
          <div className="right-box">
            <div className="box-1">
              <div className="box">
                <h2>Dịch Vụ</h2>
                <div className="sub-box">
                  <a>Điều khoản sử dụng</a>
                  <a>Chính sách bảo mật thông tin cá nhân</a>
                  <a>Chính sách bảo mật thanh toán</a>
                  <a>Giới thiệu OBS</a>
                  <a>Hệ thống trung tâm - nhà sách</a>
                </div>
              </div>
              <div className="box">
                <h2>Hỗ Trợ</h2>
                <div className="sub-box">
                  <a>Chính sách đổi - trả - hoàn tiền</a>
                  <a>Chính sách bảo hành - bồi hoàn</a>
                  <a>Chính sách vận chuyển</a>
                  <a>Chính sách khách sỉ</a>
                  <a>Phương thức thanh toán và xuất HĐ</a>
                </div>
              </div>
              <div className="box">
                <h2>Tài Khoản Của Tôi</h2>
                <div className="sub-box">
                  <a>Đăng nhập/Tạo mới tài khoản</a>
                  <a>Thay đổi địa chỉ khách hàng</a>
                  <a>Chi tiết tài khoản</a>
                  <a>Lịch sử mua hàng </a>
                </div>
              </div>
            </div>
            {/* <div className="box-2">
              <div className="box">
                <h2>Liên Hệ</h2>
              </div>
            </div> */}
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
