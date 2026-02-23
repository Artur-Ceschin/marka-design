import React from 'react'
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from 'react-native'
import { theme } from '@marka-app/tokens/native'

const { colors, fonts } = theme

export type BadgeVariant = 'green' | 'amber' | 'berry' | 'dark' | 'neutral'

export interface BadgeProps {
  variant?: BadgeVariant
  dot?: boolean
  children: React.ReactNode
  style?: ViewStyle
}

const variantStyles: Record<BadgeVariant, { container: ViewStyle; text: TextStyle; dot: ViewStyle }> = {
  green: {
    container: { backgroundColor: colors.green.mist, borderColor: `${colors.green.moss}33` },
    text: { color: colors.green.moss },
    dot: { backgroundColor: colors.green.moss },
  },
  amber: {
    container: { backgroundColor: colors.amber.pale, borderColor: `${colors.amber.DEFAULT}33` },
    text: { color: colors.amber.DEFAULT },
    dot: { backgroundColor: colors.amber.DEFAULT },
  },
  berry: {
    container: { backgroundColor: colors.berry.pale, borderColor: `${colors.berry.DEFAULT}33` },
    text: { color: colors.berry.DEFAULT },
    dot: { backgroundColor: colors.berry.DEFAULT },
  },
  dark: {
    container: { backgroundColor: colors.dark.forest, borderColor: 'rgba(255,255,255,0.1)' },
    text: { color: colors.text.white },
    dot: { backgroundColor: colors.green.sage },
  },
  neutral: {
    container: { backgroundColor: colors.bg.linen, borderColor: colors.bg.fog },
    text: { color: colors.text.stone },
    dot: { backgroundColor: colors.text.ash },
  },
}

export function Badge({
  variant = 'green',
  dot = false,
  children,
  style,
}: BadgeProps) {
  const v = variantStyles[variant]

  return (
    <View style={[styles.base, v.container, style]}>
      {dot && <View style={[styles.dot, v.dot]} />}
      {typeof children === 'string' ? (
        <Text style={[styles.label, v.text]}>{children}</Text>
      ) : (
        children
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 9999,
    borderWidth: 1,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  label: {
    fontFamily: fonts.mono,
    fontSize: 9,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
})
