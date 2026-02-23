import React from 'react'
import {
  Pressable,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type PressableProps,
} from 'react-native'
import { theme } from '@marka-app/tokens/native'

const { colors, spacing, fonts, shadows } = theme

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'amber' | 'danger' | 'subtle'
export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  fullWidth?: boolean
  children?: React.ReactNode
}

const variantStyles: Record<ButtonVariant, { container: ViewStyle; text: TextStyle }> = {
  primary: {
    container: {
      backgroundColor: colors.green.moss,
      ...shadows.greenGlow,
    },
    text: { color: colors.text.white },
  },
  secondary: {
    container: {
      backgroundColor: colors.bg.birch,
      borderWidth: 1.5,
      borderColor: colors.bg.bark,
    },
    text: { color: colors.text.charcoal },
  },
  ghost: {
    container: {
      backgroundColor: `${colors.green.moss}14`,
      borderWidth: 1.5,
      borderColor: `${colors.green.moss}40`,
    },
    text: { color: colors.green.moss },
  },
  amber: {
    container: {
      backgroundColor: colors.amber.DEFAULT,
      ...shadows.amberGlow,
    },
    text: { color: colors.text.white },
  },
  danger: {
    container: {
      backgroundColor: colors.bg.birch,
      borderWidth: 1.5,
      borderColor: `${colors.berry.DEFAULT}4D`,
    },
    text: { color: colors.berry.DEFAULT },
  },
  subtle: {
    container: {
      backgroundColor: colors.bg.birch,
      borderWidth: 1.5,
      borderColor: `${colors.bg.bark}99`,
    },
    text: { color: colors.text.stone },
  },
}

const sizeStyles: Record<ButtonSize, { container: ViewStyle; text: TextStyle }> = {
  xl: { container: { height: 52, paddingHorizontal: spacing[6] }, text: { fontSize: 15, fontWeight: '600' } },
  lg: { container: { height: 44, paddingHorizontal: spacing[5] }, text: { fontSize: 13, fontWeight: '500' } },
  md: { container: { height: 36, paddingHorizontal: spacing[4] }, text: { fontSize: 12, fontWeight: '500' } },
  sm: { container: { height: 28, paddingHorizontal: spacing[3] }, text: { fontSize: 11, fontWeight: '500' } },
  xs: { container: { height: 24, paddingHorizontal: 10 }, text: { fontSize: 10, fontWeight: '500' } },
}

export function Button({
  variant = 'primary',
  size = 'lg',
  loading = false,
  icon,
  iconRight,
  fullWidth = false,
  disabled,
  children,
  style,
  ...props
}: ButtonProps) {
  const v = variantStyles[variant]
  const s = sizeStyles[size]
  const isDisabled = disabled || loading

  return (
    <Pressable
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      style={({ pressed }) => [
        styles.base,
        v.container,
        s.container,
        fullWidth && styles.fullWidth,
        pressed && styles.pressed,
        isDisabled && styles.disabled,
        style as ViewStyle,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={v.text.color} />
      ) : (
        <View style={styles.content}>
          {icon && <View style={styles.icon}>{icon}</View>}
          {typeof children === 'string' ? (
            <Text style={[styles.label, v.text, s.text]}>{children}</Text>
          ) : (
            children
          )}
          {iconRight && <View style={styles.icon}>{iconRight}</View>}
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
  },
  fullWidth: {
    width: '100%',
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: fonts.body,
  },
})
