import React from 'react'
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  type ViewStyle,
  type ImageSourcePropType,
} from 'react-native'
import { theme } from '@marka-app/tokens/native'

const { colors, fonts, spacing, shadows, radius } = theme

// ── FindCard ─────────────────────────────────────────────────────────

export interface FindCardProps {
  name: string
  latin: string
  date: string
  imageSource?: ImageSourcePropType
  onPress?: () => void
  style?: ViewStyle
}

export function FindCard({ name, latin, date, imageSource, onPress, style }: FindCardProps) {
  const Wrapper = onPress ? Pressable : View
  const wrapperProps = onPress ? { onPress, accessibilityRole: 'button' as const } : {}

  return (
    <Wrapper
      {...wrapperProps}
      style={[cardStyles.findContainer, shadows.sm, style]}
    >
      <View style={[cardStyles.findImage, !imageSource && { backgroundColor: colors.green.pale }]}>
        {imageSource && (
          <Image source={imageSource} style={StyleSheet.absoluteFill} resizeMode="cover" />
        )}
      </View>
      <View style={cardStyles.findContent}>
        <Text style={cardStyles.findName} numberOfLines={2}>{name}</Text>
        <Text style={cardStyles.findLatin}>{latin}</Text>
        <Text style={cardStyles.findDate}>{date}</Text>
      </View>
    </Wrapper>
  )
}

// ── FeaturedCard ─────────────────────────────────────────────────────

export interface FeaturedCardProps {
  name: string
  latin: string
  tags: string[]
  imageSource?: ImageSourcePropType
  bgColor?: string
  onPress?: () => void
  style?: ViewStyle
}

export function FeaturedCard({
  name,
  latin,
  tags,
  imageSource,
  bgColor = colors.green.moss,
  onPress,
  style,
}: FeaturedCardProps) {
  const Wrapper = onPress ? Pressable : View
  const wrapperProps = onPress ? { onPress, accessibilityRole: 'button' as const } : {}

  return (
    <Wrapper
      {...wrapperProps}
      style={[cardStyles.featuredContainer, shadows.md, { backgroundColor: bgColor }, style]}
    >
      {imageSource && (
        <Image source={imageSource} style={[StyleSheet.absoluteFill, { opacity: 0.4 }]} resizeMode="cover" />
      )}
      <View style={cardStyles.featuredContent}>
        <View style={cardStyles.featuredTags}>
          {tags.map((tag) => (
            <View key={tag} style={cardStyles.featuredTag}>
              <Text style={cardStyles.featuredTagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <Text style={cardStyles.featuredName}>{name}</Text>
        <Text style={cardStyles.featuredLatin}>{latin}</Text>
      </View>
    </Wrapper>
  )
}

const cardStyles = StyleSheet.create({
  findContainer: {
    width: 130,
    borderRadius: radius.md,
    overflow: 'hidden',
    backgroundColor: colors.bg.linen,
    borderWidth: 1,
    borderColor: colors.bg.fog,
  },
  findImage: {
    height: 88,
    overflow: 'hidden',
  },
  findContent: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 4,
  },
  findName: {
    fontFamily: fonts.display,
    fontWeight: '600',
    fontSize: 12,
    color: colors.text.charcoal,
    lineHeight: 15,
  },
  findLatin: {
    fontFamily: fonts.display,
    fontStyle: 'italic',
    fontSize: 9,
    color: colors.text.ash,
    marginTop: 2,
  },
  findDate: {
    fontFamily: fonts.mono,
    fontSize: 8,
    color: colors.text.ash,
    marginTop: spacing[3],
    letterSpacing: 0.8,
  },
  featuredContainer: {
    width: '100%',
    height: 200,
    borderRadius: radius.lg,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  featuredContent: {
    padding: spacing[5],
  },
  featuredTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 8,
  },
  featuredTag: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 9999,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  featuredTagText: {
    fontFamily: fonts.mono,
    fontSize: 8,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.9)',
  },
  featuredName: {
    fontFamily: fonts.display,
    fontWeight: '600',
    fontSize: 20,
    color: colors.text.white,
    lineHeight: 24,
  },
  featuredLatin: {
    fontFamily: fonts.display,
    fontStyle: 'italic',
    fontSize: 11,
    color: 'rgba(255,255,255,0.55)',
    marginTop: 4,
  },
})
