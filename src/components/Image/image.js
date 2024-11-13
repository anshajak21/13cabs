"use client"
import { useWindowSize } from "@/utils/width";
import Image from "next/image";

export const Img = ({priority=false,mobSrc="",src,alt="default",style, mobilestyle,className,mobileclassName}) => {
    const {width} = useWindowSize();
    if (width>768)
        return <Image loading={priority?"eager":"lazy"} priority={priority} width={width?width:4000} height={width?parseInt(width/2, 0):2000} src={src} className={className} alt={alt} style={style} />
    return <Image loading={priority?"eager":"lazy"} priority={priority} width={width?width:768} height={width?parseInt(width/2, 0):400} src={mobSrc ?? src} className={mobileclassName ?? className} alt={alt} style={mobilestyle} />
};