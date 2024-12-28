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
  visible= 1
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
    <nav className={style.breadcrumb} aria-label="breadcrumbs">
      <ol>
        {!omitRootLabel && (
          <li>
              <a href="/">
                {convertBreadcrumb(
                  rootLabel || 'Home',
                  labelsToUppercase,
                  replaceCharacterList,
                  transformLabel
                )}
              </a>
          </li>
        )}
        {breadcrumbs.length >= 1 &&
          breadcrumbs.map((breadcrumb, i) => {
            if (
              !breadcrumb ||
              breadcrumb.breadcrumb.length === 0 ||
              (omitIndexList && omitIndexList.find((value) => value === i))
            ) {
              return;
            }
            return (
              <li key={breadcrumb.href}>
                  <a href={breadcrumb.href}>
                    {convertBreadcrumb(
                      breadcrumb.breadcrumb,
                      labelsToUppercase,
                      replaceCharacterList,
                      transformLabel
                    )}
                  </a>
              </li>
            );
          })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;