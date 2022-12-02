

import React from 'react'


export type sizes = "small" | "medium" | "large"; 

export type ButtonTypes  = 
    "primary" | "secondary" | "tertiary" | "danger" | "success" | "warning" | "info" | "light" | "dark" | "link"



export interface ButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size: sizes
  onClick: () => void
  variant: ButtonTypes
  disabled?: boolean
  option: 'button' | 'submit' | 'reset'
  styles?: React.CSSProperties
  bgColor?: string 
  textColor?: string 
  text?: string
  icon?: string |null
  iconPosition?: 'left' | 'right' | "none"
  className?: string
  children?: React.ReactNode
    


}