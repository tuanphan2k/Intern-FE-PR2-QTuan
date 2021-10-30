import {
  Form,
  Tabs,
  Button,
  Row,
  Input,
  Radio,
  DatePicker,
  Avatar,
  notification,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import TitlePage from "../../../components/User/TitlePage";
import { REGEX } from "../../../constants/validate";
import "moment/locale/vi";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateUserAction } from "../../../redux/User/actions/auth.action";
import "./styles.scss";

function ProfilePage() {
  const { TabPane } = Tabs;
  const dispatch = useDispatch();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  let birthdayString = "";

  const dateFormatList = "DD/MM/YYYY";

  function onChangeDatePicker(date, dateString) {
    birthdayString = dateString.trim();
  }

  const onFinish = (values) => {
    dispatch(
      updateUserAction({
        ...values,
        birthDay: birthdayString || userInfo.birthDay,
        accessToken,
        id: userInfo.id,
      })
    );
    notification.success({
      message: "Edit Profile Successfully!",
    });
  };

  const handleChangePassword = (values) => {
    dispatch(
      updateUserAction({
        password: values.password,
        accessToken,
        id: userInfo.id,
      })
    );
    notification.success({
      message: "Edit Password Successfully!",
    });
  };

  return (
    <main className="container-1 profile-page">
      <TitlePage title="Profile Page" />
      <div className="profile-page__form">
        <Tabs tabPosition="left">
          <TabPane
            tab={
              <span>
                <UserOutlined />
                Account information
              </span>
            }
            key="1"
          >
            <Form
              name="infor-form"
              className="infor__form"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              initialValues={{
                fullName: userInfo.fullName,
                gender: userInfo.gender || "",
                phone: userInfo.phone || "",
                birthDay: userInfo.birthDay
                  ? moment(userInfo.birthDay, dateFormatList)
                  : null,
                nickName: userInfo.nickName || "",
              }}
              onFinish={onFinish}
            >
              <p className="infor__form--title">Personal information</p>
              <div className="infor__avatar">
                <div className="infor__avatar--img">
                  <Row justify="center">
                    <Avatar
                      size={86}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  </Row>
                </div>
                <p className="infor__avatar--name">{`Hi ${userInfo.fullName}`}</p>
              </div>
              <Form.Item
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                  () => ({
                    validator(_, value) {
                      if (!value || value.match(REGEX.EMAIL_REGEX)) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error("The input is not valid E-mail!")
                      );
                    },
                  }),
                ]}
              >
                <Input
                  placeholder="Email address"
                  disabled
                  value={userInfo.email}
                />
              </Form.Item>
              <Form.Item
                name="fullName"
                label="Full Name"
                rules={[
                  { required: true, message: "Please input your Full Name!" },
                ]}
              >
                <Input placeholder="Full Name" />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone number"
                rules={[
                  () => ({
                    validator(_, value) {
                      if (!value || value.match(REGEX.PHONE_NUMBER_REGEX)) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error("The input is not valid Phone number!")
                      );
                    },
                  }),
                ]}
              >
                <Input placeholder="Add phone number" />
              </Form.Item>
              <Form.Item name="nickName" label="Nick Name">
                <Input placeholder="Add nick Name" />
              </Form.Item>
              <Form.Item name="gender" label="Gender">
                <Radio.Group>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="orther">Other</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Birthday" name="birthDay">
                <DatePicker
                  format={dateFormatList}
                  onChange={onChangeDatePicker}
                  placeholder="dd/mm/yyyy"
                />
              </Form.Item>
              <Row justify="center">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="my-1"
                    size="large"
                  >
                    Save Change
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </TabPane>
          <TabPane
            tab={
              <span>
                <LockOutlined />
                Change Password
              </span>
            }
            key="2"
          >
            <Form
              className="change-pass__form"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              onFinish={handleChangePassword}
            >
              <p className="change-pass__form--title">Change Password</p>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input new password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Re-type"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm new password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
              <Row justify="center">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="my-1"
                    size="large"
                  >
                    Save Change
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </TabPane>
          <TabPane
            tab={
              <span>
                <SolutionOutlined />
                Oder management
              </span>
            }
            key="3"
          >
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
    </main>
  );
}

export default ProfilePage;
