"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import style from "./breadcumb.module.scss";
import Link from 'next/link';

const getPathFromUrl = (url) => {
  return url.split(/[?#]/)[0];
};

const convertBreadcrumb = (
  title,
  toUpperCase,
  replaceCharacterList,
  transformLabel
) => {
  let transformedTitle = getPathFromUrl(title);

  if (transformLabel) {
    return transformLabel(transformedTitle);
  }

  if (replaceCharacterList) {
    for (let i = 0; i < replaceCharacterList.length; i++) {
      transformedTitle = transformedTitle.replaceAll(
        replaceCharacterList[i].from,
        replaceCharacterList[i].to
      );
    }
  }
  return toUpperCase ? decodeURI(transformedTitle).toUpperCase() : decodeURI(transformedTitle);
};

const Breadcrumbs = ({
  rootLabel= 'Home',
  name="",
  omitRootLabel= false,
  labelsToUppercase= false,
  replaceCharacterList= [{ from: '-', to: ' ' }],
  transformLabel= undefined,
  omitIndexList= undefined,
  visible= 0
}) => {
  const router = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }
  return (
    <section class={`inner-banner ${visible? '':'hide'}`}>
        <div class="container">
            <ul class="thm-breadcrumb">
                <li><a href="/">{convertBreadcrumb( rootLabel || 'Home', labelsToUppercase, replaceCharacterList, transformLabel )}</a></li>
                {breadcrumbs.length >= 1 && breadcrumbs.map((breadcrumb, i) => {
                    if (
                      !breadcrumb ||
                      breadcrumb.breadcrumb.length === 0 ||
                      (omitIndexList && omitIndexList.find((value) => value === i))
                    ) {
                      return;
                    }
                    return (
                      <>
                      <li><span class="sep">{'>'}</span></li>
                      <li><Link href={breadcrumb.href} class="page-title">{convertBreadcrumb( breadcrumb.breadcrumb, labelsToUppercase, replaceCharacterList, transformLabel )}</Link></li>
                      </>
                    );
                })}
            </ul>
            <h2>{name?name: convertBreadcrumb( breadcrumbs.at(-1).breadcrumb, labelsToUppercase, replaceCharacterList, transformLabel )}</h2>
        </div>
    </section>
  );
};

export default Breadcrumbs;