import '~~/layout/Footer.scss'
const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <footer className="footer">
          <div className="left-box">
            <div className="logo">
              SS
            </div>
            <div className="footer-note">
              <p>
                SS.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ
                trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả
                Hệ Thống SS trên toàn quốc.{" "}
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
              <img src="/assets/images/footer/googleplay.png" alt=""/>
              <img src="/assets/images/footer/appstore.png" alt=""/>
            </div>
          </div>
          <div className="right-box">
            <div className="box-1">
              <div className="box">
                <h2>Dịch Vụ</h2>
                <div className="sub-box">
                  <a href='/'> Điều khoản sử dụng</a>
                  <a href='/'> Chính sách bảo mật thông tin cá nhân</a>
                  <a href='/'> Chính sách bảo mật thanh toán</a>
                  <a href='/'> Giới thiệu SS</a>
                  <a href='/'> Hệ thống trung tâm</a>
                </div>
              </div>
              <div className="box">
                <h2>Hỗ Trợ</h2>
                <div className="sub-box">
                  <a href='/'> Chính sách đổi - trả - hoàn tiền</a>
                  <a href='/'> Chính sách bảo hành - bồi hoàn</a>
                  <a href='/'> Chính sách vận chuyển</a>
                  <a href='/'> Chính sách khách sỉ</a>
                  <a href='/'> Phương thức thanh toán và xuất HĐ</a>
                </div>
              </div>
              <div className="box">
                <h2>Tài Khoản Của Tôi</h2>
                <div className="sub-box">
                  <a href="/"> Đăng nhập/Tạo mới tài khoản</a>
                  <a href="/"> Thay đổi địa chỉ khách hàng</a>
                  <a href="/"> Chi tiết tài khoản</a>
                  <a href="/"> Lịch sử mua hàng </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
