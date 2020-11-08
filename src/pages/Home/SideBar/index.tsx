import React, { FC } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { intl } from "@/locales";
import { useLocation, useRouteMatch } from "react-router-dom";

interface PropsType {}

const SideBar: FC<PropsType> = props => {
  const pathname = useLocation();
  const path = useRouteMatch();

  console.log(pathname, path);
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.SubMenu icon={<UserOutlined />} title={intl.get("common.menu.dashboard")}>
          <Menu.Item key="/dashboard/analysis">
            {intl.get("common.menu.dashboard.analysis")}
          </Menu.Item>
          <Menu.Item key="/dashboard/workpplace">
            {intl.get("common.menu.dashboard.workplace")}
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu icon={<UserOutlined />} title={intl.get("common.menu.animate")}>
          <Menu.Item key="/animate/list">{intl.get("common.menu.animate.list")}</Menu.Item>
          <Menu.Item key="/animate/create">{intl.get("common.menu.animate.create")}</Menu.Item>
          <Menu.Item key="/animate/category">{intl.get("common.menu.animate.category")}</Menu.Item>
          <Menu.Item key="/animate/season">{intl.get("common.menu.animate.season")}</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu icon={<UserOutlined />} title={intl.get("common.menu.comic")}>
          <Menu.Item key="/comic/list">{intl.get("common.menu.comic.list")}</Menu.Item>
          <Menu.Item key="/comic/create">{intl.get("common.menu.comic.create")}</Menu.Item>
          <Menu.Item key="/comic/category">{intl.get("common.menu.comic.category")}</Menu.Item>
          <Menu.Item key="/comic/season">{intl.get("common.menu.comic.season")}</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu icon={<UserOutlined />} title={intl.get("common.menu.post")}>
          <Menu.Item key="/post/list">{intl.get("common.menu.post.list")}</Menu.Item>
          <Menu.Item key="/post/create">{intl.get("common.menu.post.create")}</Menu.Item>
          <Menu.Item key="/post/category">{intl.get("common.menu.post.category")}</Menu.Item>
          <Menu.Item key="/post/season">{intl.get("common.menu.post.season")}</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu icon={<UserOutlined />} title={intl.get("common.menu.blog")}>
          <Menu.Item key="/blog/list">{intl.get("common.menu.blog.list")}</Menu.Item>
          <Menu.Item key="/blog/category">{intl.get("common.menu.blog.category")}</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu icon={<UserOutlined />} title={intl.get("common.menu.user")}>
          <Menu.Item key="/user/list">{intl.get("common.menu.user.list")}</Menu.Item>
          <Menu.Item key="/user/create">{intl.get("common.menu.user.create")}</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu icon={<UserOutlined />} title={intl.get("common.menu.store")}>
          <Menu.Item key="/store/shop">{intl.get("common.menu.store.shop")}</Menu.Item>
          <Menu.Item key="/store/order">{intl.get("common.menu.store.order")}</Menu.Item>
          <Menu.Item key="/store/key">{intl.get("common.menu.store.key")}</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu icon={<UserOutlined />} title={intl.get("common.menu.cloud")}>
          <Menu.Item key="/cloud/list">{intl.get("common.menu.cloud.list")}</Menu.Item>
          <Menu.Item key="/cloud/source">{intl.get("common.menu.cloud.source")}</Menu.Item>
          <Menu.Item key="/cloud/record">{intl.get("common.menu.cloud.record")}</Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="/comment" icon={<ShopOutlined />}>
          {intl.get("common.menu.comment")}
        </Menu.Item>
        <Menu.Item key="/rate" icon={<ShopOutlined />}>
          {intl.get("common.menu.rate")}
        </Menu.Item>
        <Menu.Item key="/danmu" icon={<ShopOutlined />}>
          {intl.get("common.menu.danmu")}
        </Menu.Item>
        <Menu.Item key="/report" icon={<ShopOutlined />}>
          {intl.get("common.menu.report")}
        </Menu.Item>
        <Menu.Item key="/image" icon={<ShopOutlined />}>
          {intl.get("common.menu.image")}
        </Menu.Item>
        <Menu.Item key="/config" icon={<ShopOutlined />}>
          {intl.get("common.menu.config")}
        </Menu.Item>
        <Menu.Item key="/tool" icon={<ShopOutlined />}>
          {intl.get("common.menu.tool")}
        </Menu.Item>
      </Menu>
    </>
  );
};

export default SideBar;
