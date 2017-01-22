package com.codegreenllc.util;

public class Cast {
	@SuppressWarnings("unchecked")
	public static <T> T cast(final Object o) {
		return (T) o;
	}
}
