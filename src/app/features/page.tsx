import MDXContent from "@/helpers/MDXContent";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import FeaturesComponent from "@/partials/FeaturesPart";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage,Feature } from "@/types";
import React, { useEffect, useState } from 'react';

const FeaturesPage = () => {
  const homepage = getListPage("_index.md");
  const { frontmatter } = homepage;
  const { features }: { features: Feature[] } = frontmatter;

  return (
    <>
      <FeaturesComponent features={features} />
    </>
  );
};

export default FeaturesPage;
