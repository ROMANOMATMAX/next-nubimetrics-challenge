import React from "react";
import styled from "styled-components";

const AsideImageBannerContainer = styled.div`
  height: 59rem;
  width: 21.375rem;
  background-image: url("/images/aside-banner.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AsideImageBanner = () => {
  return (
    <AsideImageBannerContainer />
  )
};
