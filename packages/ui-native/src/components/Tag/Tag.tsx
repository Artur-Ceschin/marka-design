import React from 'react'
import { Pressable, Text, View, StyleSheet, type ViewStyle, type TextStyle } from 'react-native'
import { theme } from '@marka-app/tokens/native'

const { colors, fonts } = theme

export type TagVariant = 'green' | 'amber' | 'berry' | 'dark' | 'neutral'
export type TagSize = 'md' | 'sm'

export interface TagProps {
  variant?: TagVariant
  size?: TagSize
  dot?: boolean
  children: React.ReactNode
  onPress?: () => void
  style?: ViewStyle
}

const variantStyles: Record<TagVariant, { container: ViewStyle; text: TextStyle; dot: ViewStyle }> = {
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

const sizeMap: Record<TagSize, { px: number; py: number; fontSize: number }> = {
  md: { px: 10, py: 4, fontSize: 10 },
  sm: { px: 8, py: 3, fontSize: 9 },
}

export function Tag({
  variant = 'green',
  size = 'md',
  dot = false,
  children,
  onPress,
  style,
}: TagProps) {
  const v = variantStyles[variant]
  const s = sizeMap[size]

  const content = (
    <>
      {dot && <View style={[styles.dot, v.dot]} />}
      {typeof children === 'string' ? (
        <Text style={[styles.label, v.text, { fontSize: s.fontSize }]}>{children}</Text>
      ) : (
        children
      )}
    </>
  )

  const containerStyle: ViewStyle[] = [
    styles.base,
    v.container,
    { paddingHorizontal: s.px, paddingVertical: s.py },
    style as ViewStyle,
  ]

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        style={({ pressed }) => [...containerStyle, pressed && { opacity: 0.8 }]}
      >
        {content}
      </Pressable>
    )
  }

  return <View style={containerStyle}>{content}</View>
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
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
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    lineHeight: 14,
  },
})
