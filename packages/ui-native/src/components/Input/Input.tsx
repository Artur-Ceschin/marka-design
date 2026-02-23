import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  type ViewStyle,
  type TextInputProps,
} from 'react-native'
import { theme } from '@marka-app/tokens/native'

const { colors, fonts, spacing } = theme

export interface InputProps extends TextInputProps {
  label?: string
  hint?: string
  error?: string
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  containerStyle?: ViewStyle
}

export function Input({
  label,
  hint,
  error,
  icon,
  iconRight,
  containerStyle,
  editable = true,
  style,
  ...props
}: InputProps) {
  const [focused, setFocused] = useState(false)
  const hasError = !!error

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputContainer,
          focused && styles.inputFocused,
          hasError && styles.inputError,
          !editable && styles.inputDisabled,
        ]}
      >
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          editable={editable}
          placeholderTextColor={colors.text.ash}
          style={[styles.input, icon ? { paddingLeft: 0 } : undefined, iconRight ? { paddingRight: 0 } : undefined, style]}
          onFocus={(e) => {
            setFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocused(false)
            props.onBlur?.(e)
          }}
          {...props}
        />
        {iconRight && <View style={styles.icon}>{iconRight}</View>}
      </View>

      {(hint || error) && (
        <Text
          style={[styles.hint, hasError && styles.hintError]}
          accessibilityRole={hasError ? 'alert' : undefined}
        >
          {error ?? hint}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 6,
    width: '100%',
  },
  label: {
    fontFamily: fonts.mono,
    fontSize: 8,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: colors.text.ash,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: colors.bg.linen,
    borderWidth: 1.5,
    borderColor: colors.bg.fog,
    borderRadius: 16,
    paddingHorizontal: spacing[4],
    gap: 8,
  },
  inputFocused: {
    borderColor: colors.green.moss,
  },
  inputError: {
    borderColor: `${colors.berry.DEFAULT}CC`,
    backgroundColor: `${colors.berry.pale}4D`,
  },
  inputDisabled: {
    opacity: 0.5,
  },
  icon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.text.charcoal,
    paddingVertical: 0,
  },
  hint: {
    fontFamily: fonts.mono,
    fontSize: 8,
    letterSpacing: 1,
    color: colors.text.ash,
  },
  hintError: {
    color: colors.berry.DEFAULT,
  },
})
